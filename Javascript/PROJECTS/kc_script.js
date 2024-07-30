const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class='color'>
            <table>
                <tr>
                    <th>Key</th>
                    <th>Keycode</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key===' '? "Space": e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
            <h3> Here is the information of the key preesed by you</h3>
        </div>
    `;
});
