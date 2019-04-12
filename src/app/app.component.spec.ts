import { Component } from '@angular/core';
import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { getDebugElement } from 'test.util';

import { ConfigService, I18nService } from '@services';
import { MOCK_TRANSLATE_MODULE } from '@services/i18n/translate.config.mock';
import { CountryCd } from '@models';

import { AppComponent } from './app.component';

@Component({ selector: 'app-header', template: '' })
class HeaderStubComponent {}

@Component({ selector: 'app-footer', template: '' })
class FooterStubComponent {}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MOCK_TRANSLATE_MODULE,
        HttpClientTestingModule,
      ],
      declarations: [
        AppComponent,
        HeaderStubComponent,
        FooterStubComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should setup locales for current country',
    inject([ConfigService, I18nService], (configService, i18nService) => {
      // TODO AL-86: mock receiving country
      const expectedLocales = { title: 'United states' };

      spyOn(configService, 'getLocalesByCountryCd').and.returnValue(expectedLocales);
      spyOn(i18nService, 'setupLocales');

      component.init();

      expect(configService.getLocalesByCountryCd).toHaveBeenCalledWith(CountryCd.US);
      expect(i18nService.setupLocales).toHaveBeenCalledWith(expectedLocales);
    }),
  );

  it('should contains header', () => {
    expect(getDebugElement(fixture, 'app-header').nativeElement).toBeTruthy();
  });

  it('should contains footer', () => {
    expect(getDebugElement(fixture, 'app-footer').nativeElement).toBeTruthy();
  });
});
