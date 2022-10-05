setTimeout(() => {
    document.getElementById("test").innerHTML="10";
    setTimeout(()=>{
        document.getElementById("test").innerHTML="9";
        setTimeout(()=>{
            document.getElementById("test").innerHTML="8";
            setTimeout(()=>{
                document.getElementById("test").innerHTML="7";
                setTimeout(() => {
                    document.getElementById("test").innerHTML="6";
                    setTimeout(()=>{
                        document.getElementById("test").innerHTML="5";
                        setTimeout(()=>{
                            document.getElementById("test").innerHTML="4";
                            setTimeout(()=>{
                                document.getElementById("test").innerHTML="3";
                                setTimeout(()=>{
                                    document.getElementById("test").innerHTML="2";
                                    setTimeout(()=>{
                                        document.getElementById("test").innerHTML="1";
                                            setTimeout(()=>{
                                                document.getElementById("test").innerHTML="Happy Independance day!";
                                            },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                }, 1000);
            },1000)
        },1000)
    },1000)
}, 1000);