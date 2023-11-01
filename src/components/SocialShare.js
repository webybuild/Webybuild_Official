import React, { useEffect } from "react";

const SocialSharing = () => {
  useEffect(() => {
    if (window.__sharethis__) {
      // Initialize ShareThis buttons
      window.__sharethis__.initialize();
    }
  }, []);

  return (
    <div>
      <p>Share this blog:</p>
      <div className="sharethis-inline-share-buttons"></div>
    </div>
  );
};

export default SocialSharing;
