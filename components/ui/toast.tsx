import { toast } from "sonner";

type ToastType = "success" | "info" | "warning" | "error";

export const showToast = ({
  message,
  type = "success",
}: {
  message: string;
  type?: ToastType;
}) => {
  toast[type](message, {
    duration: 3000,
    style: {
      width: "fit-content",
      minWidth: "min-content",
    },
  });
};
