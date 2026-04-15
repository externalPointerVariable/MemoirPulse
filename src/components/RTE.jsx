import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';
import config from '../config/config';


export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1 text-gray-300'>{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor
        apiKey={config.tinymceApiKey}
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "wordcount",
                "help",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            skin: "oxide-dark",
            content_css: "dark",
            content_style: `
                body { 
                    font-family:Helvetica,Arial,sans-serif; 
                    font-size:14px;
                    background-color: #1f2937;
                    color: #ffffff;
                }
                a {
                    color: #818cf8;
                }
            `
        }}
        onEditorChange={onChange}
        />
    )}
    />
      </div>
  );
}