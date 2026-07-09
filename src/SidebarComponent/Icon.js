import React, { useEffect } from 'react';
import { loadResources } from './p-d15ec307.js'; // Assuming 'p-d15ec307.js' has the necessary exports.

function Icon() {
  useEffect(() => {
    async function loadCustomResources() {
      const resourcesUrl = new URL('.', import.meta.url).href;
      const config = { resourcesUrl };

      if (config.resourcesUrl) {
        await loadResources([["p-1c0b2c47", [[1, "ion-icon", { mode: [1025], color: [1], ios: [1], md: [1], flipRtl: [4, "flip-rtl"], name: [513], src: [1], icon: [8], size: [1], lazy: [4], sanitize: [4], svgContent: [32], isVisible: [32] }]]]], config);
      }
    }

    loadCustomResources();
  }, []);

  return (
    <div>
      {/* Your app components */}
    </div>
  );
}

export default Icon;
