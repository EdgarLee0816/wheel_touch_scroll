document.addEventListener("DOMContentLoaded", () =>{

    const layout = document.getElementById("layout");

    const section = [ ...layout.children];

    let page = 0;

    const last = section.length -1; //3
    
    // 스크롤(마우스휠) 이벤트
    window.addEventListener("wheel", e => {
        // preventDefault는 기본 값을 막아 놓는 다는 의미.
        e.preventDefault ;

        if (e.deltaY > 0) {
            page++;
        } 
        
        else if (e.deltaY < 0) {
            page--;
        }

        if (page < 0) {
            page = 0;
        } 
        
        else if (page > last) {
            page = last;
        }

        console.log ( e.deltaY);

        layout.style.top = page * (-100) + "vh";

    }, {passive:false});

    //터치 환경, 터치이벤트

    let startY;

    window.addEventListener("touchstart", e =>{

        startY = e.touches[0].clientY;    

    });

    window.addEventListener("touchend", e => {

        const endY = e.changedTouches[0].clientY;
        const deltaY = startY - endY;

        if (Math.abs(deltaY) > 50) {
            if (deltaY > 0) {
                page++;
            }

            else if (deltaY < 0 ) {
                page--;
            }
            
        } 

        if (page < 0) {
            page = 0;
        } 
        
        else if (page > last) {
            page = last;
        }

        layout.style.top = page * (-100) + "vh";

    }, {passive:false});


});//////////////////끝;