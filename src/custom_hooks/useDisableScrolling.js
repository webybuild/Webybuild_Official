import { useEffect } from "react";

export function useDisableScrolling(open) {
  useEffect(() => {
    if (open) {
      // When the drawer is open, disable scrolling
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      // When the drawer is closed, enable scrolling
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
  }, [open]);
}
