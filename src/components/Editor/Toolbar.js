import React from 'react';
import { Button, Icon, Tooltip } from "@chakra-ui/react"
import { Grid, Center } from "@chakra-ui/react"
import { GrBold, GrItalic } from 'react-icons/gr';
import {ImUnderline, ImListNumbered, ImStrikethrough} from 'react-icons/im';
import {MdFormatListBulleted} from 'react-icons/md';
import {BiCodeAlt} from 'react-icons/bi';
import {FaQuoteLeft} from 'react-icons/fa';
import './Toolbar.css';
import {
    toggleBoldMark, 
    toggleCodeMark, 
    toggleItalicMark, 
    toggleStrikethroughMark, 
    toggleUnderlineMark,
    toggleBulletBlock,
    toggleNumberedBlock,
    toggleH1Block,
    toggleH2Block,
    toggleH3Block,
    toggleQuoteBlock
  } from './util';

const Toolbar = (props) => {
    return (
        <Center className = "toolbox-container" >
        <Grid className = "toolbox" templateColumns="repeat(11, 1fr)" gap = {0}  boxShadow="md">
            <Tooltip label = "Make some text bold">
                <Button variant="ghost" w={5} colorScheme="teal" onMouseDown = {event => {
                    event.preventDefault();
                    toggleBoldMark(props.editor);
                }}><Icon as = {GrBold}></Icon>
                </Button>
            </Tooltip>

            <Tooltip label = "Italicize some text">    
            <Button variant="ghost" w={5} colorScheme="teal" onMouseDown = {event => {
                event.preventDefault();
                toggleItalicMark(props.editor);
            }}><Icon as = {GrItalic}></Icon></Button>
            </Tooltip>
            <Tooltip label = "Underline some text">
            <Button variant="ghost" w={5} colorScheme="teal" onMouseDown = {event => {
                event.preventDefault();
                toggleUnderlineMark(props.editor);
            }}><Icon as = {ImUnderline}></Icon></Button>
            </Tooltip>
            <Tooltip label = "Done? Strike it"> 
            <Button variant="ghost" w={5} colorScheme="teal" onMouseDown = {event => {
                event.preventDefault();
                toggleStrikethroughMark(props.editor);
            }}><Icon as = {ImStrikethrough}></Icon></Button>
            </Tooltip>
            <Tooltip label = "Make some text appear as code">
            <Button variant="ghost" w={8} colorScheme="teal" onMouseDown = {event => {
                event.preventDefault();
                toggleCodeMark(props.editor);
            }}><Icon as = {BiCodeAlt}></Icon></Button>
            </Tooltip>
            <Tooltip label = "Make a bullet point">
            <Button variant="ghost" w={5} colorScheme="teal" onMouseDown = {event => {
                event.preventDefault();
                toggleBulletBlock(props.editor);
            }}><Icon as = {MdFormatListBulleted}></Icon></Button>
            </Tooltip>
            <Tooltip label = "Make a numbered point">
            <Button variant="ghost" w={5} colorScheme="teal" onMouseDown = {event => {
                event.preventDefault();
                toggleNumberedBlock(props.editor);
            }}><Icon as = {ImListNumbered}></Icon></Button>
            </Tooltip>
            <Tooltip label = "Create H1 block">
            <Button variant="ghost" w={5} colorScheme="teal" onMouseDown = {event => {
                event.preventDefault();
                toggleH1Block(props.editor);
            }}>H1</Button>
            </Tooltip>
            <Tooltip label = "Create H2 block">
            <Button variant="ghost" w={5} colorScheme="teal" onMouseDown = {event => {
                event.preventDefault();
                toggleH2Block(props.editor);
            }}>H2</Button>
            </Tooltip>
            <Tooltip label = "Create H3 block">
            <Button variant="ghost" w={5} colorScheme="teal" onMouseDown = {event => {
                event.preventDefault();
                toggleH3Block(props.editor);
            }}>H3</Button>
            </Tooltip>
            <Tooltip label = "Make a quote block">
            <Button variant="ghost" w={5} colorScheme="teal" onMouseDown = {event => {
                event.preventDefault();
                toggleQuoteBlock(props.editor);
            }}><Icon as = {FaQuoteLeft}></Icon></Button>
            </Tooltip>
        </Grid>
        </Center>
    );

};

export default Toolbar;