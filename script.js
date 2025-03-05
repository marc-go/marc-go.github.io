function openMenue() {
                var menue = document.getElementById("menue");
                menue.style.display = "block";
                menue.classList.remove("close");
                menue.classList.add("open");
                document.getElementById("content").style.display = "none";
                document.getElementById("openMenue").style.display = "none";
                document.getElementById("closeMenue").style.display = "block";
            }

            function closeMenue() {
                var menue = document.getElementById("menue");
                menue.classList.remove("open");
                menue.classList.add("close");

                setTimeout(function() {
                    menue.style.display = "none";
                }, 500);

                document.getElementById("content").style.display = "block";
                document.getElementById("openMenue").style.display = "block";
                document.getElementById("closeMenue").style.display = "none";
            }