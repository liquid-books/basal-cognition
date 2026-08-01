const fs = require('fs');
const apiKey = fs.readFileSync('/home/node/.openclaw/openrouter-api-key', 'utf8').trim();
const inputImage = fs.readFileSync('/home/node/openclaw/books/ai-copilot-bankunited/images/cover.png');
const base64Image = inputImage.toString('base64');
const OUT = '/home/node/openclaw/books/basal-cognition/images/cover.png';

const PROMPT = `Edit this 3D book cover image. The provided image is the PHYSICS TEMPLATE ONLY — preserve exactly the 3D perspective angle, book shape, spine depth, binding, drop shadow, white background, and overall proportions. Replace the entire cover design with a completely new one:

COVER DESIGN:
- Background color: deep teal-to-black vertical gradient (#062a2e at top fading to #01110f at bottom)
- Upper portion imagery: a scientifically beautiful macro-biological visual — a bright bioluminescent branching network of living cells, rendered as glowing cyan and lime-green cell membranes connected by luminous filaments, resembling a planarian flatworm body plan dissolving into a network of interconnected glowing cells. Organic, microscopy-inspired, luminous against the dark background. Absolutely NO human figures, NO brains, NO circuit boards, NO robot faces, NO generic tech imagery.
- Geometric accents: two thin bold horizontal bands in electric lime green (#9EE84B) separating the imagery from the title block
- Title text: "BASAL COGNITION" in large bold white sans-serif, stacked on two lines, lower half of the cover
- Subtitle text below the title in smaller light-gray sans-serif: "How Intelligence Works Without a Brain — and What That Means for Machines"
- Author: "Dr. Ernesto Lee" in white at the bottom-left with a small lime-green cell/node icon beside it
- Spine: dark teal background, "BASAL COGNITION" in white rotated vertical text, and "DR. ERNESTO LEE" in smaller white text near the bottom of the spine

Keep the 3D book physics, camera angle, page-block edge, shadow, and shape identical to the template. Portrait orientation. Photorealistic book product photo on a clean white surface.`;

(async () => {
  const models = ['google/gemini-3-pro-image-preview', 'google/gemini-3.1-flash-image-preview'];
  for (const model of models) {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        console.log(`Trying ${model} attempt ${attempt}...`);
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model,
            messages: [{
              role: 'user',
              content: [
                { type: 'text', text: PROMPT },
                { type: 'image_url', image_url: { url: `data:image/png;base64,${base64Image}` } }
              ]
            }]
          })
        });
        const data = await response.json();
        const images = data?.choices?.[0]?.message?.images;
        if (images?.[0]?.image_url?.url) {
          const b64 = images[0].image_url.url.split(',')[1];
          const buf = Buffer.from(b64, 'base64');
          fs.writeFileSync(OUT, buf);
          console.log(JSON.stringify({ success: true, model, size: buf.length }));
          return;
        }
        console.log('No image. Response:', JSON.stringify(data).slice(0, 400));
      } catch (e) {
        console.log('Error:', e.message);
      }
    }
  }
  console.log(JSON.stringify({ success: false }));
  process.exit(1);
})();
