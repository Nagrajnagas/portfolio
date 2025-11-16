import React,{useState,useEffect} from "react";
import axios from "axios";
import { Table } from "antd";

const WeatherTable = () => {
    const TableColumns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Time",
            dataIndex: "time",
            key: "time",
        },
        {
            title: "Temperature (°C)",
            dataIndex: "temperature",
            key: "temperature",
            render : (_,value) => value.temperature ?? "N/A",
        },
    ];

    const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";
    const [tableData,setTableData] = useState([]);

    // get data
    const getData = async () => {
        try {
            const response = await axios.get(url);
            const data = response.data;
            const formatted = data.hourly.time.map((time,i) => ({
                id:i+1,
                time,
                temperature : data.hourly.temperature_2m[i],
            }));
            setTableData(formatted);
        }
        catch (error) {
            console.error("Hi",error);
        }
    };
    useEffect(() =>{
        getData();
    },[]);

    return <Table dataSource={tableData}  columns={TableColumns}/>;
};

export default WeatherTable;
