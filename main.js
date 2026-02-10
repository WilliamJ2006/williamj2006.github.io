const form = document.querySelector('form');
const submitButton = document.querySelector('.submit-button')

async function postForm(formData) {
    try {
        const response = await fetch("https://formspree.io/f/mojdlzaa", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error("Failed");
        }
        
        const responseData = await response.json();
        return { data: responseData, error: null };
    }
    catch(error) {
        return { data: null, error: error };
    }
}

form.addEventListener(('submit'), async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const formValues = {
        name: formData.get(`name`),
        email: formData.get(`email`),
        inquiry: formData.get('inquiry')
    }
    const data = await postForm(formValues);
    if(data.error){
        submitButton.textContent = "Failed to submit.";
        return;
    }
    submitButton.textContent = "Thank You for Submitting!";
    form.reset();
})