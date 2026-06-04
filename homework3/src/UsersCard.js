function UserCard ({
    user,
    showName,
    showLastName,
    showEmail,
    showGender,
    showAge
})
{
    return (
        <div className="user-card">
        {showName && <p>Name: {user.name.first}</p>}
        {showLastName && <p>Last Name: {user.name.last}</p>}
        {showEmail && <p>Email: {user.email}</p>}
        {showGender && <p>Gender: {user.gender}</p>}
        {showAge && <p>Age: {user.dob.age}</p>}
        </div>
    );
}

export default UserCard;