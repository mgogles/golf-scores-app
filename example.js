function fetchData() {
    fetch ('https://reqres.in/api/users')
        .then(response => {
            if (!response.ok) {
                throw Error('ERROR')
            }
            return response.json();
        })
        .then(data => {
            console.log(data.data);
            const html = data.data
                .map(user => {
                    return `
                        <div class="content">
        
                            <table class="leaderboard">
                                <thead>
                                    <tr>
                                        <th style="text-align:left">Pos.</th>
                                        <th style="text-align:left">Player</th>
                                        <th style="text-align:left">Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${user.id}</td>
                                        <td>${user.first_name} ${user.last_name}</td>
                                        <td class="score" style="text-align:center">${user.id}</td>
                                    </tr>
                                </tbody>
                            
                            </table>
                        </div>
                     `
                })
                .join("");
            document
                .querySelector("#results")
                .insertAdjacentHTML('afterbegin', html);
        })
        .catch(error => {
            console.log(error);
        });

}

fetchData();