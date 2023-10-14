#!/bin/bash

# Declare an associative array to map source folders to destination folders
declare -A folder_map

# Define your folder mappings
folder_map["r/react"]="node_modules/next/dist/compiled/react"
folder_map["r/react-dom"]="node_modules/next/dist/compiled/react-dom"
folder_map["r/react-dom-experimental"]="node_modules/next/dist/compiled/react-dom-experimental"
folder_map["r/react-experimental"]="node_modules/next/dist/compiled/react-experimental"
# Add more mappings as needed

# Iterate through the folder map and replace each source folder with its corresponding destination folder
for source_folder in "${!folder_map[@]}"; do
    destination_folder="${folder_map[$source_folder]}"
    
    # Check if the source folder exists
    if [ -d "$source_folder" ]; then
        # Check if the destination folder exists, and if so, delete it
        if [ -d "$destination_folder" ]; then
            rm -r "$destination_folder"
        fi

        # Copy the source folder to the destination folder
        rsync -a "$source_folder" "$destination_folder"
        echo "Folder replaced successfully: $source_folder -> $destination_folder"
    else
        echo "Source folder does not exist: $source_folder"
    fi
done
