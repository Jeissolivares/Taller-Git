const mostrarNav = (header) =>{
    const nav = `
    <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" style="margin-left: 5%;">Music Nest</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menú</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./index2.html">History</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.arscesis.com/" target="_blank">Shop</a>
                    </li>
                </ul>
                <br>
                <form class="d-flex" role="search">
                    <button class="btn btn-success" type="button" data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop">Subscribe</button>
                </form>
            </div>
        </div>
    </div>
</nav>
    `;
    let h = document.getElementById(header);

    h.innerHTML = nav;
};

const enviarComentario = () => {
    let txt = document.getElementById('floatingTextarea2');
    txt.value = '';
    alert(`Su comentario fue enviado con exito`);
}