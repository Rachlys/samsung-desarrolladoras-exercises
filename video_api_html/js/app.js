
const video_input = document.getElementById('video_input');
const reproductor_video = document.getElementById('reproductor_video');
const reproductor_error = document.getElementById('reproductor_error');

video_input.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const type = file.type;
    
    if (type.startsWith('video/')) {
        const fileURL = URL.createObjectURL(file);

        reproductor_error.style.display = "none"
        reproductor_loading.style.display = 'block';
        reproductor_video.style.display = 'none';
        reproductor_video.src = fileURL;

        reproductor_video.addEventListener('canplaythrough', () => {
            document.getElementsByTagName('video')[0].volume = 0.1;
            reproductor_loading.style.display = 'none';
            reproductor_video.style.display = 'block';
        });
    } else {
        reproductor_video.style.display = 'none';
        reproductor_video.src = "";
        reproductor_error.style.display = "flex"
    }
    
});