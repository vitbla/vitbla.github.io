let isChanged = false;
function init()
{
    
    console.log("hi m1curoshi");
    document.getElementById("me").onclick = () => {
        if(!isChanged)
        {
            document.getElementById("hello").textContent = "Yes it's me!";
        }
        else
        {
            document.getElementById("hello").textContent = "Hello, it's m1curoshi!";
        }
        isChanged = !isChanged;
    }
}

init();