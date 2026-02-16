export async function postForm(formData) {
  try {
    const response = await fetch('https://formspree.io/f/mojdlzaa', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed');
    }

    const responseData = await response.json();
    return { data: responseData, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
}
