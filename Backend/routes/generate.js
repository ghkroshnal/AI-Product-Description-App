const express = require('express');
const router = express.Router();
const OpenAI = require('openai');

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post('/generate-description', async (req, res) => {
  const { productName, keywords } = req.body;
  try {
    const prompt = `Write a compelling product description for "${productName}" highlighting these keywords: ${keywords}.`;
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });
    res.json({ description: response.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to generate description" });
  }
});

module.exports = router;
