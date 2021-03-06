/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IPattern, } from "./components/pattern/patternList";
export namespace Components {
    interface CssPattern {
        /**
          * Returns a list of all available pattern objects.
         */
        "getAllAvailablePatterns": () => Promise<IPattern[]>;
        /**
          * Returns a pattern calculated from the input. Returns always the same pattern if the input stays the same.
         */
        "getPatternFromExternalTitle": (name: string) => Promise<IPattern>;
        /**
          * Returns a pattern object. If it can't find the pattern it returns the first pattern in the list.
         */
        "getPatternFromPatternName": (name: string) => Promise<IPattern>;
        /**
          * Pattern name to display
         */
        "pattern": string;
        /**
          * Selectes a pattern calculated from the input. Displays always the same pattern if the input stays the same.
         */
        "patternFor": string;
    }
}
declare global {
    interface HTMLCssPatternElement extends Components.CssPattern, HTMLStencilElement {
    }
    var HTMLCssPatternElement: {
        prototype: HTMLCssPatternElement;
        new (): HTMLCssPatternElement;
    };
    interface HTMLElementTagNameMap {
        "css-pattern": HTMLCssPatternElement;
    }
}
declare namespace LocalJSX {
    interface CssPattern {
        /**
          * Pattern name to display
         */
        "pattern"?: string;
        /**
          * Selectes a pattern calculated from the input. Displays always the same pattern if the input stays the same.
         */
        "patternFor"?: string;
    }
    interface IntrinsicElements {
        "css-pattern": CssPattern;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "css-pattern": LocalJSX.CssPattern & JSXBase.HTMLAttributes<HTMLCssPatternElement>;
        }
    }
}
