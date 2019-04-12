import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

/**
 * @param {ComponentFixture<any>} fixture
 * @param {string} cssSelector
 * @returns {DebugElement}
 */
export function getDebugElement(fixture: ComponentFixture<any>, cssSelector: string): DebugElement {
  return fixture.debugElement.query(By.css(cssSelector));
}

/**
 * @param {ComponentFixture<any>} fixture
 * @param {string} cssSelector
 * @returns {DebugElement[]}
 */
export function getDebugElements(fixture: ComponentFixture<any>, cssSelector: string): DebugElement[] {
  return fixture.debugElement.queryAll(By.css(cssSelector));
}
