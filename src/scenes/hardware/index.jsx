import Header from "../../components/Header";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";

import { Box, Button, IconButton } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import {
  EditOutlined,
  PreviewOutlined,
  DeleteForeverOutlined,
  ForwardToInboxOutlined,
} from "@mui/icons-material";


const Hardware = () => {
  const [Hardware, setHardware] = useState([]);

  const user = useUser();
  const supabase = useSupabaseClient();
  
  let rows = [];

  useEffect(() => {
    if (user) {
      getHardware();
    }
  }, [user]);

  const renderButton = (params) => {
    return (
      <strong>
        <IconButton
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 16 }}
        >
          {params.field === "editbutton" ? <EditOutlined /> : null}
          {params.field === "deletebutton" ? <DeleteForeverOutlined /> : null}
          {params.field === "invitebutton" ? (
            <ForwardToInboxOutlined />
          ) : null}
          {params.field === "reviewbutton" ? <PreviewOutlined /> : null}
        </IconButton>
      </strong>
    );
  };

  async function getHardware() {
    let { data, error, status } = await supabase
    .from('hardware')
    .select(`*`)
    .eq('customer_id', user.id);
   if (data !== null) {
      let i = 0;
      data.map((asset) => {
        i = i + 1;
        rows = [
          {
            id: i,
            name: asset.hostname,
            ip_address: asset.ip_address,
            mac_address: asset.mac_address,
            vendor: asset.vendor,
            type: asset.type,
            os: asset.os,
            user_count: 33,
          },
          ...rows,
        ];
      });
      setHardware(rows);
    } else {
      alert("Error loading documents");
      console.log(error);
    }
  }

  const columns = [
    {
      field: "editbutton",
      headerName: "Edit",
      width: 50,
      renderCell: renderButton,
    },
    {
      field: "deletebutton",
      headerName: "Delete",
      width: 100,
      renderCell: renderButton,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "mac_address",
      headerName: "Mac Address",
      flex: 1,
    },
    {
      field: "ip_address",
      headerName: "IP Address",
      flex: 1,
    },
    {
      field: "vendor",
      headerName: "Vendor",
      flex: 1,
    },
    {
      field: "type",
      headerName: "Type",
      flex: 1,
    },
    {
      field: "os",
      headerName: "OS",
      flex: 1,
    },

  ];

  return (
    <Box m="20px">
      <Header
        title="Your Hardware Assets"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
       
      >        <Button sx="margin:10px" color="secondary" variant="contained">
      New Asset
    </Button>
        <DataGrid
          getRowClassName={(params) => params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd' }
          rows={Hardware}
          columns={columns}
         rowHeight={32}
        />
      </Box>
    </Box>
  );
};

export default Hardware;
