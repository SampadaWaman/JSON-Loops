const WALLPAPERS = [{
            WALLPAPER_KEY: 'wallpaper.image',
            WALLPAPER_VALID_KEY: 'wallpaper.image.valid',
          }, {
            WALLPAPER_KEY: 'lockscreen.image',
            WALLPAPER_VALID_KEY: 'lockscreen.image.valid',
          }];
          
          WALLPAPERS.forEach((obj) => {
            for (const [key, value] of Object.entries(obj)) {
              console.log(`${key} - ${value}`);
            }

            for(var i = 0; i < WALLPAPERS.length; i++) {
                var obj = WALLPAPERS[i];
            
                console.log(obj.WALLPAPER_KEY);
            }

            for(var i in WALLPAPERS) {
                console.log(WALLPAPERS[i]);}
        });

