import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeleteBooking } = useMutation({
    mutationFn: (bookingId) => deleteBookingApi(bookingId),
    onSuccess: () => {
      toast.success(`Booking # deleted successfully`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("There was an error while Deleting"),
  });

  return { deleteBooking, isDeleteBooking };
}
