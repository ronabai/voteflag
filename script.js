document.addEventListener('DOMContentLoaded', function() {
    const bigFlagContainer = document.getElementById("bigFlag");
    const mediumFlagsContainer = document.getElementById("mediumFlags");
    const smallFlagsContainer = document.getElementById("smallFlags");

    async function getFlags() {
        try {
            const response = await fetch('/flags');
            const flags = await response.json();
            displayFlags(flags);
        } catch (error) {
            console.error('Bayraklar alınırken hata:', error);
        }
    }

    getFlags();

    function displayFlags(flags) {
        flags.sort((a, b) => b.voteCount - a.voteCount);

        mediumFlagsContainer.innerHTML = '';
        smallFlagsContainer.innerHTML = '';

        flags.forEach((flag, index) => {
            const flagContainer = document.createElement('div');
            flagContainer.classList.add('flag');
            flagContainer.style.backgroundImage = `url('${flag.imageUrl}')`;

            const voteCountElement = document.createElement('div');
            voteCountElement.classList.add('vote-count');
            voteCountElement.textContent = `Vote Count: ${flag.voteCount}`;

            flagContainer.appendChild(voteCountElement);

            if (index < 5) {
                mediumFlagsContainer.appendChild(flagContainer);
            } else {
                smallFlagsContainer.appendChild(flagContainer);
            }

            flagContainer.addEventListener('click', async function () {
                try {
                    // Check if the user has already voted (checked through cookie)
                    if (document.cookie.includes('voted')) {
                        alert("Her 12 saatte bir oy kullanabilirsiniz.");
                        return;
                    }

                    const response = await fetch(`/vote`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ flagId: flag._id })
                    });

                    if (!response.ok) {
                        const errorMessage = await response.json();
                        throw new Error(errorMessage.error); // Throw the error message received from the server
                    }

                    console.log(`Oy verildi: ${flag._id}`);
                    // Refresh flags after voting
                    getFlags();
                } catch (error) {
                    console.error('Oy verme işlemi sırasında bir hata oluştu:', error);
                    alert(error.message); // Show the error message to the user
                }
            });
        });

        const winnerFlag = flags[0];
        bigFlagContainer.innerHTML = `
            <div class="flag" style="background-image: url('${winnerFlag.imageUrl}')"></div>
            <div class="vote-count">Vote Count: ${winnerFlag.voteCount}</div>
        `;
    }
});
