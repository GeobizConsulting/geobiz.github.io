// stations.json 파일을 불러와 지하철역 목록을 표시하는 함수
fetch('stations.json')
    .then(response => response.json())
    .then(data => {
        const stationList = document.getElementById('station-list');

        // 데이터를 순회하며 li 요소를 생성하고 역 이름을 추가
        data.forEach(station => {
            const li = document.createElement('li');
            li.textContent = station.station;
            stationList.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Error loading station data:', error);
    });
