function Filters({
    showName,
    setShowName,
    showLastName,
    setShowLastName,
    showEmail,
    setShowEmail,
    showGender,
    setShowGender,
    showAge,
    setShowAge,
}) 

{
    return (
        <div>
            <label>
                <input
                type="checkbox"
                checked={showName}
                onChange={(e) => setShowName(!showName)}
            
            />
                Show Name
            </label>
            <label>
                <input
                type="checkbox"
                checked={showLastName}
                onChange={(e) => setShowLastName(!showLastName)}
            />
                Show Last Name
            </label>
            <label>
                <input
                type="checkbox"
                checked={showEmail}
                onChange={(e) => setShowEmail(!showEmail)}
            />
                Show Email
            </label>
            <label>
                <input
                type="checkbox"
                checked={showGender}
                onChange={(e) => setShowGender(!showGender)}
            />
                Show Gender
            </label>
            <label>
                <input
                type="checkbox"
                checked={showAge}
                onChange={(e) => setShowAge(!showAge)}
            />
                Show Age
            </label>            
        </div>
    );
}

export default Filters;