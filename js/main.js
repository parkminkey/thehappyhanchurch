// 메뉴 클릭 시 iframe의 src를 변경하는 함수
function loadPage(page) {
    const frame = document.getElementById('contentFrame');
    if (frame) {
      frame.src = page;
    }
  }
  