export async function getToken(credentials: { username: string, password: string }): Promise<{ token: string }> {
    const response = await fetch('https://playground.tesonet.lt/v1/tokens', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        throw new Error('Invalid credentials');
    }

    return response.json();
};