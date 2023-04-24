
const video_input = document.getElementById('video_input');
const reproductor_video = document.getElementById('reproductor_video');
const reproductor_error = document.getElementById('reproductor_error');
const buttons = document.querySelector('.buttons')


video_input.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const type = file.type;
    
    if (type.startsWith('video/')) {
        const fileURL = URL.createObjectURL(file);
        buttons.style.display = "flex"
        reproductor_error.style.display = "none"
        reproductor_loading.style.display = 'block';
        reproductor_video.style.display = 'none';
        reproductor_video.src = fileURL;

        reproductor_video.addEventListener('canplaythrough', () => {
            reproductor_loading.style.display = 'none';
            reproductor_video.style.display = 'block';
        });
    } else {
        reproductor_video.style.display = 'none';
        buttons.style.display = "none"
        reproductor_video.src = "";
        reproductor_error.style.display = "flex"
    }
    
});


function buttonPlay(){
    reproductor_video.play()
}

function buttonStop(){
    reproductor_video.pause()
}

function subirVolumen(){
    if(reproductor_video.volume < 1){
        reproductor_video.volume += 0.2
    }else{
        reproductor_video.volume = reproductor_video.volume
    }
}

function bajarVoluemn(){
    if(reproductor_video.volume > 0.1){
        reproductor_video.volume -= 0.2
    }else{
        reproductor_video.volume = reproductor_video.volume
    }
}