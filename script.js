async function startChat() {
    const question = document.getElementById('chatInput').value;
    const chatResponseDiv = document.getElementById('chatResponse');
    
    if (!question) {
        alert("الرجاء كتابة سؤال.");
        return;
    }

    chatResponseDiv.innerHTML = "جاري معالجة سؤالك...";

    try {
        const apiKey = "sk-your-api-key"; // ضع هنا مفتاح API الخاص بك
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Bearer ${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}
            },
            body: JSON.stringify({
                model: "text-davinci-003", // أو اختر النموذج الذي تريده
                prompt: question,
                max_tokens: 150
            })
        });

        const data = await response.json();

        if (data.choices && data.choices.length > 0) {
            chatResponseDiv.innerHTML = data.choices[0].text.trim();
        } else {
            chatResponseDiv.innerHTML = "حدث خطأ، حاول مرة أخرى.";
        }

    } catch (error) {
        chatResponseDiv.innerHTML = "حدث خطأ أثناء الاتصال، حاول مرة أخرى.";
        console.error("Error:", error);
    }
}