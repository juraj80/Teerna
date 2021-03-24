import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AlertContext } from "../../../contexts";

export default function GameView() {
    const addAlert = useContext(AlertContext);
    const [files, setFiles] = useState([]);
    useEffect(() => {
        axios.get('/api/document/get-files').then(res => setFiles(res.data)).catch(err => addAlert('error', 'Could not retrieve files right now.'));
    },[]);

    useEffect(() => console.log(files), [files]);

    return <div />
}