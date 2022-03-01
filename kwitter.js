function addUser()
{
    localStorage.setItem("user name", user_name)
    window.location = "kwitter_room.html"
    current_user = localStorage.getItem("user_name", user_name);
}