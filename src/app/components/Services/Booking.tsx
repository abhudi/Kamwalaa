"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceTitle?: string;
}

const generateSlots = () => {
  const slots: string[] = [];
  for (let hour = 7; hour <= 20; hour++) {
    ["00", "30"].forEach((min) => {
      if (hour === 20 && min === "30") return;
      const period = hour < 12 ? "AM" : "PM";
      const hour12 = hour % 12 === 0 ? 12 : hour % 12;
      slots.push(`${hour12}:${min} ${period}`);
    });
  }
  return slots;
};

const slots = generateSlots();

const groupSlots = {
  Morning: slots.filter((slot) => {
    const hour = parseInt(slot.split(":")[0]);
    const period = slot.split(" ")[1];
    return period === "AM" && hour >= 7;
  }),
  Afternoon: slots.filter((slot) => {
    const hour = parseInt(slot.split(":")[0]);
    const period = slot.split(" ")[1];
    return period === "PM" && (hour === 12 || (hour >= 1 && hour <= 4));
  }),
  Evening: slots.filter((slot) => {
    const hour = parseInt(slot.split(":")[0]);
    const period = slot.split(" ")[1];
    return period === "PM" && hour >= 5 && hour <= 8;
  }),
};

export default function BookingModal({
  open,
  onOpenChange,
  serviceTitle,
}: BookingModalProps) {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<"online" | "cash" | null>(
    null
  );
  const [successOpen, setSuccessOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open || successOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [open, successOpen]);

  function handleSubmit() {
    if (!selectedSlot) {
      alert("Please select a time slot");
      return;
    }
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    if (paymentMethod === "cash") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        onOpenChange(false);
        setSuccessOpen(true);
      }, 1000);
    } else if (paymentMethod === "online") {
      // In real app: redirect to payment gateway
      onOpenChange(false);
      setSuccessOpen(true);
    }
  }

  function handleSuccessClose() {
    setSuccessOpen(false);
    setSelectedSlot(null);
    setPaymentMethod(null);
  }

  function handleBookingClose() {
    if (loading) return;
    onOpenChange(false);
    setSelectedSlot(null);
    setPaymentMethod(null);
  }

  return (
    <>
      {/* Booking Modal */}
      <Dialog.Root open={open} onOpenChange={onOpenChange}>
        <Dialog.Portal>
          <Dialog.Overlay
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
            onClick={handleBookingClose}
          />
          <Dialog.Content className="fixed top-1/2 left-1/2 max-w-md w-[90vw] max-h-[80vh] bg-white rounded-xl shadow-lg -translate-x-1/2 -translate-y-1/2 focus:outline-none z-50 flex flex-col">
            <div className="p-6 pb-4 border-b border-gray-200 relative">
              <Dialog.Title className="text-2xl font-semibold text-gray-900">
                {serviceTitle ? `Book ${serviceTitle}` : "Select a Time Slot"}
              </Dialog.Title>
              {serviceTitle && (
                <p className="text-sm text-gray-600 mt-1">
                  Choose your preferred time slot
                </p>
              )}

              <Dialog.Close asChild>
                <button
                  className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
                  onClick={handleBookingClose}
                  aria-label="Close"
                >
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </Dialog.Close>
            </div>

            <div className="flex-1 overflow-y-auto p-6 pt-4">
              {loading ? (
                <div className="flex justify-center items-center h-full text-blue-600 font-semibold text-lg">
                  Booking in progress...
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Payment Method */}
                  <div className="space-y-4 mt-4">
                    <p className="text-sm text-gray-800 font-medium">
                      Choose Payment Method
                    </p>
                    <div className="flex space-x-3">
                      <button
                        onClick={() => setPaymentMethod("online")}
                        className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-colors
                          ${
                            paymentMethod === "online"
                              ? "bg-blue-600 text-white border-blue-600 shadow-md"
                              : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-300"
                          }
                        `}
                      >
                        Online Payment
                      </button>
                      <button
                        onClick={() => setPaymentMethod("cash")}
                        className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-colors
                          ${
                            paymentMethod === "cash"
                              ? "bg-blue-600 text-white border-blue-600 shadow-md"
                              : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-300"
                          }
                        `}
                      >
                        Cash After Work
                      </button>
                    </div>
                  </div>
                  {Object.entries(groupSlots).map(([group, groupSlots]) => (
                    <div key={group}>
                      <h3 className="text-lg font-medium mb-3 text-gray-800 top-0 bg-white py-1">
                        {group}
                      </h3>
                      <div className="grid grid-cols-4 gap-3">
                        {groupSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedSlot(slot)}
                            className={`py-2 px-1 rounded-lg border text-sm font-medium transition-colors cursor-pointer
                            ${
                              selectedSlot === slot
                                ? "bg-blue-600 text-white border-blue-600 shadow-md"
                                : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-300"
                            }
                          `}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-6 pt-4 border-t border-gray-200 flex justify-end space-x-3">
              <Dialog.Close asChild>
                <button
                  className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
                  onClick={handleBookingClose}
                >
                  Cancel
                </button>
              </Dialog.Close>
              <button
                onClick={handleSubmit}
                disabled={!selectedSlot || !paymentMethod}
                className={`px-5 py-2 rounded-md text-white font-medium transition-colors cursor-pointer
                  ${
                    selectedSlot && paymentMethod
                      ? "bg-blue-600 hover:bg-blue-700 shadow-md"
                      : "bg-blue-300 cursor-not-allowed"
                  }
                `}
              >
                Book Now
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Success Modal */}
      <Dialog.Root open={successOpen} onOpenChange={setSuccessOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 max-w-sm w-[90vw] bg-white rounded-xl shadow-lg -translate-x-1/2 -translate-y-1/2 focus:outline-none z-50 p-6 flex flex-col items-center">
            <Dialog.Title className="text-xl font-semibold text-green-700 mb-4">
              Booking Successful!
            </Dialog.Title>
            <p className="mb-6 text-center text-gray-700">
              Your slot <strong>{selectedSlot}</strong> has been booked
              successfully.
            </p>
            <Dialog.Close asChild>
              <button
                onClick={handleSuccessClose}
                className="px-6 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white transition-colors"
              >
                Close
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
