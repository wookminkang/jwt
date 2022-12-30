export const handleWatch = (req, res) => {
	res.render("watch");
}

export const handleEdit = (req, res) => res.send("Edit Video");

export const handleDelete = (req, res) => res.send("Delete Video");

export const handleUpload = (req, res) => {
    res.send("Watch video : upload")
}
