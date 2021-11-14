import React from 'react';
import { Button, ButtonGroup, Icon } from "@chakra-ui/react"
import { Grid, GridItem, Center } from "@chakra-ui/react"
import { GrBold, GrItalic } from 'react-icons/gr';
import {ImUnderline, ImListNumbered, ImStrikethrough} from 'react-icons/im';
import {MdFormatListBulleted} from 'react-icons/md';
import {BiCodeAlt, BiHeading} from 'react-icons/bi';
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
        <Center>
        <Grid templateColumns="repeat(11, 1fr)" gap = {0} >
            <Button variant="ghost" w={5} colorScheme="teal" onMouseDown = {event => {
                event.preventDefault();
                toggleBoldMark(props.editor);
            }}>
                <Icon as = {GrBold}></Icon>
            </Button>
            <Button variant="ghost" w={5} colorScheme="teal" onMouseDown = {event => {
                event.preventDefault();
                toggleItalicMark(props.editor);
            }}><Icon as = {GrItalic}></Icon></Button>
            <Button variant="ghost" w={5} colorScheme="teal" onMouseDown = {event => {
                event.preventDefault();
                toggleUnderlineMark(props.editor);
            }}><Icon as = {ImUnderline}></Icon></Button>
            <Button variant="ghost" w={5} colorScheme="teal" onMouseDown = {event => {
                event.preventDefault();
                toggleStrikethroughMark(props.editor);
            }}><Icon as = {ImStrikethrough}></Icon></Button>
            <Button variant="ghost" w={8} colorScheme="teal" onMouseDown = {event => {
                event.preventDefault();
                toggleCodeMark(props.editor);
            }}><Icon as = {BiCodeAlt}></Icon></Button>
            <Button variant="ghost" w={5} colorScheme="teal" onMouseDown = {event => {
                event.preventDefault();
                toggleBulletBlock(props.editor);
            }}><Icon as = {MdFormatListBulleted}></Icon></Button>
            <Button variant="ghost" w={5} colorScheme="teal" onMouseDown = {event => {
                event.preventDefault();
                toggleNumberedBlock(props.editor);
            }}><Icon as = {ImListNumbered}></Icon></Button>
            <Button variant="ghost" w={5} colorScheme="teal" onMouseDown = {event => {
                event.preventDefault();
                toggleH1Block(props.editor);
            }}>H1</Button>
            <Button variant="ghost" w={5} colorScheme="teal" onMouseDown = {event => {
                event.preventDefault();
                toggleH2Block(props.editor);
            }}>H2</Button>
            <Button variant="ghost" w={5} colorScheme="teal" onMouseDown = {event => {
                event.preventDefault();
                toggleH3Block(props.editor);
            }}>H3</Button>
            <Button variant="ghost" w={5} colorScheme="teal" onMouseDown = {event => {
                event.preventDefault();
                toggleQuoteBlock(props.editor);
            }}><Icon as = {FaQuoteLeft}></Icon></Button>
        </Grid>
        </Center>
    );

};

export default Toolbar;