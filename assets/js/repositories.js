fetch('../assets/data/repos.json')
    .then(response => response.json())
    .then(students => {
        students = students.sort(function(first, second) {
            if (first.name < second.name) {
                return -1;
            }
            if ( first.name > second.name) {
                return 1;
            }
            return 0;
        });
        const rows = [];
        for (const [i, student] of students.entries()) {
            let row = `
                <tr>
                    <td>${i+1}</td>
                    <td>${student.name}</td>`;
            if (student.github_url) {
                row += `<td><a href="${student.github_url}" target="_blank">GitHub Repo</a></td>`;
            } else {
                row += `<td>missing</td>`
            }
            if (student.gitpages_url) {
                row += `
                    <td><a href="${student.gitpages_url}" target="_blank">GitHub Pages</a></td>
                    <td><a href="${student.gitpages_url}/${student.hw01 || "hw01"}" target="_blank">hw1</a></td>
                    <td>
                        <a href="${student.gitpages_url}/${student.hw02 || "hw02"}/02_flexbox/" target="_blank">hw2a</a> &bull;
                        <a href="${student.gitpages_url}/${student.hw02 || "hw02"}/03_spotify/" target="_blank">hw2b</a>
                    </td>
                    <td><a href="${student.gitpages_url}/${student.hw03 || "hw03"}" target="_blank">hw3</a></td>
                    <td><a href="${student.gitpages_url}/${student.hw04 || "hw04"}" target="_blank">hw4</a></td>
                `;
            } else {
                row += `
                    <td>missing</td>
                    <td> -- </td>
                    <td> -- </td>
                    <td> -- </td>
                    <td> -- </td>
                `;
            }
            rows.push(row + '</tr>');
        }
        const rowsHTML = rows.join('\n');
        const html = `
            <article>
            <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>GitHub Repo</th>
                    <th>GitHub Pages</th>
                    <th>HW1</th>
                    <th>HW2</th>
                    <th>HW3</th>
                    <th>HW4</th>
                </tr>
            </thead>
            <tbody>
                ${rowsHTML}
            </tbody>
        </table>
        </article>`;
        const div = document.createElement("div"); 
        div.innerHTML = html;
        document.querySelector('main').appendChild(div);

    });
