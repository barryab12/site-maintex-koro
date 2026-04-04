import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

async function main() {
  const zai = await ZAI.create();
  
  const imageBuffer = fs.readFileSync('./upload/pasted_image_1773929252530.png');
  const base64Image = imageBuffer.toString('base64');
  const imageUrl = `data:image/png;base64,${base64Image}`;
  
  const prompt = `Cette image montre un problème avec la barre de navigation d'un site web.

Analyse le problème d'alignement :
1. Le menu est-il centré ou décalé ?
2. De combien est-il décalé et dans quelle direction ?
3. Quels éléments sont mal alignés ?
4. Comment cela devrait-il être corrigé ?

Sois précis sur le problème d'alignement.`;

  const response = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: prompt },
          { type: 'image_url', image_url: { url: imageUrl } }
        ]
      }
    ],
    thinking: { type: 'disabled' }
  });

  console.log('=== ANALYSE DU PROBLÈME D\'ALIGNEMENT ===\n');
  console.log(response.choices?.[0]?.message?.content);
}

main().catch(console.error);
