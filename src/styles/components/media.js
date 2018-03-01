/**
 * Created by ryan on 2018/2/27.
 */
import styled, { css } from 'styled-components';
import theme from './theme';

const media = Object.keys(theme.medias).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width : ${theme.medias[label]}) {
            ${css(...args)}
        }
    `
    return acc
}, {});

export default media ;