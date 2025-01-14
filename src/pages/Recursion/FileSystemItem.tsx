import { useState } from "react";
import { Folder, InsertDriveFile, ChevronRight } from "@mui/icons-material";
import { Node } from "./Recursion";
import { Button } from "@mui/material";

export const FileSystemItem = ({ node }: { node: Node }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div key={node.name} style={{ margin: "5px 5px" }}>
      {node?.nodes && node?.nodes?.length > 0 && (
        <Button onClick={() => setIsOpen(!isOpen)}>
          <ChevronRight
            sx={{
              cursor: "pointer",
              transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          />
        </Button>
      )}

      {node?.nodes && node?.nodes?.length > 0 ? (
        <Button
          onClick={() => setIsOpen(!isOpen)}
          style={{ marginRight: "5px" }}
        >
          <Folder sx={{ cursor: "pointer" }} />
          {node.name}
        </Button>
      ) : (
        <Button>
          <InsertDriveFile />
          {node.name}
        </Button>
      )}

      {isOpen && (
        <ul>
          {node.nodes?.map((node) => (
            <FileSystemItem node={node} />
          ))}
        </ul>
      )}
    </div>
  );
};
