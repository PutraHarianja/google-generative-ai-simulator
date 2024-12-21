const express = require('express')
const router = express.Router()
const genAI = require('../config/googleAI')

router.post('/generate', async (req, res) => {
    const { prompt } = req.body
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
        const result = await model.generateContent(prompt)
        res.json({
            response: result.response.text()
        })
    } catch (error) {
        res.status(500).json({ error: `Error generating content cause: ${error}` })
    }
})

module.exports = router