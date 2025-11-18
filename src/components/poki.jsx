import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'antd';
const PokiApi = () => {


    const tableColumns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "NAME",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "STATUS",
            dataIndex: "status",
            key: "status",
        },
        {
            title: "SPECIES",
            dataIndex: "species",
            key: "species",
        },
        {
            title: "Gender",
            dataIndex: "gender",
            key: "gender",
        },
        {
            title: "Origin",
            dataIndex: "origin",
            key: "origin",
            render: (origin) => origin?.name ?? "Unknown",
        },
        {
            title: "Location",
            dataIndex: "location",
            key: "location",
            render: (location) => location?.name ?? "Unknown",
        },
        {
            title: "IMAGES",
            dataIndex: "image",
            key: "image",
            render: (img) => (
                <img
                    src={img}
                    alt="character"
                    style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 6 }}
                />
            ),
        }
    ];

    const url = "https://rickandmortyapi.com/api/character"
    const [tableData, setTableData] = useState([]);

    // get data

    const getData = async () => {
        try {
            const response = await axios.get(url);
            const data = response.data.results;

            const formatted = data.map((c) => ({
                id: c.id,
                name: c.name,
                status: c.status,
                species: c.species,
                gender: c.gender,
                origin: c.origin,
                location: c.location,
                image: c.image
            }));
            setTableData(formatted);
        }
        catch (error) {
            console.error("Error", error)
        }
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <Table
            dataSource={tableData}
            columns={tableColumns}
            rowKey="id"
            loading={!tableData.length}
        />
    );
};

export default PokiApi;