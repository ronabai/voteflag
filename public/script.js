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
        // Bayrakları oy sayısına göre sırala
        flags.sort((a, b) => b.voteCount - a.voteCount);

        // Tüm bayrakları göster (büyük konteynera en çok oy alan bayrak hariç)
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

            // Bayrak boyutlarını ayarla ve konteynera ekle
            if (index < 5) {
                mediumFlagsContainer.appendChild(flagContainer);
            } else {
                smallFlagsContainer.appendChild(flagContainer);
            }

            // Bayrak konteynerine tıklandığında oy kullanma işlemini gerçekleştir
            flagContainer.addEventListener('click', async function () {
                try {
                    const response = await fetch(`/vote`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ flagId: flag._id })
                    });
                    if (!response.ok) {
                        throw new Error('Oy verme işlemi başarısız oldu.');
                    }
                    console.log(`Oy verildi: ${flag._id}`);
                    // Oy verildikten sonra bayrakları yeniden yükle
                    getFlags();
                } catch (error) {
                    console.error('Oy verme işlemi sırasında bir hata oluştu:', error);
                }
            });
        });

        // En çok oy alan bayrağı büyük konteynera ekstra olarak ekle
        const winnerFlag = flags[0];
        bigFlagContainer.innerHTML = `
        <a href="https://buymeacoffee.com/voteflag" target="_blank">
            <div class="flag" style="background-image: url('${winnerFlag.imageUrl}')"></div>
            <div class="vote-count">Vote Count: ${winnerFlag.voteCount}</div>
        </a> `;
    }
});
