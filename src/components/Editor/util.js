import { Transforms, Editor, Text} from 'slate'

const isBoldMarkActive = (editor) => {
    const [match] = Editor.nodes(editor, {
      match: n => n.bold === true,
      universal: true,
    });
    return !!match;
};
  
const isItalicMarkActive = (editor) => {
    const [match] = Editor.nodes(editor, {
      match: n => n.italic === true,
      universal: true,
    });
    return !!match;
};
  
const isUnderlineMarkActive = (editor) => {
    const [match] = Editor.nodes(editor, {
      match: n => n.underline === true,
      universal: true,
    });
    return !!match;
};
  
const isStrikethroughMarkActive = (editor) => {
    const [match] = Editor.nodes(editor, {
      match: n => n.strikethrough === true,
      universal: true,
    });
    return !!match;
};
  
  
const isCodeBlockActive = (editor) => {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === "code"
    });
    return !!match;
};
  
const toggleBoldMark = (editor) => {
    console.log("Toggling bold");
    const isActive = isBoldMarkActive(editor);
    console.log(isActive);
    Transforms.setNodes(
      editor,
      {bold: !isActive},
      { match: n => Text.isText(n), split: true }
    );
}
  
const toggleItalicMark = (editor) => {
    console.log("Toggling italic");
    const isActive = isItalicMarkActive(editor);
    console.log(isActive);
    Transforms.setNodes(
      editor,
      {italic: !isActive},
      { match: n => Text.isText(n), split: true }
    );
}
  
const toggleUnderlineMark = (editor) => {
    console.log("Toggling underline");
    const isActive = isUnderlineMarkActive(editor);
    console.log(isActive);
    Transforms.setNodes(
      editor,
      {underline: !isActive},
      { match: n => Text.isText(n), split: true }
    );
}
  
const toggleStrikethroughMark = (editor) => {
    console.log("Toggling Strikethrough");
    const isActive = isStrikethroughMarkActive(editor);
    console.log(isActive);
    Transforms.setNodes(
      editor,
      {strikethrough: !isActive},
      { match: n => Text.isText(n), split: true }
    );
}
  
const toggleCodeBlock = (editor) => {
    console.log("Toggling code");
    const isActive = isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? "paragraph" : "code"},
      { match: n => Editor.isBlock(editor, n)}
    );  
};

export 
{
    toggleBoldMark, 
    toggleCodeBlock, 
    toggleItalicMark, 
    toggleStrikethroughMark, 
    toggleUnderlineMark,
    isBoldMarkActive,
    isCodeBlockActive,
    isItalicMarkActive,
    isStrikethroughMarkActive,
    isUnderlineMarkActive,
};