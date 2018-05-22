import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection  } from '@angular/http/testing';
import { CarDetailService } from './car-detail.service';

fdescribe('AccountService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            BaseRequestOptions,
            MockBackend,
            {
                provide: Http,
                useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
                    return new Http(backend, defaultOptions);
                },
                deps: [MockBackend, BaseRequestOptions]
            },
            CarDetailService
    ]}));

    it('should have c', inject([ CarDetailService ], (carDetailService: CarDetailService) => {
        expect(!!carDetailService.fetchCarDetail).toEqual(true);
    }));

    it('should get data from the server for c',
    inject([ CarDetailService, MockBackend ], (carDetailService: CarDetailService, mockBackend: MockBackend) => {
        mockBackend.connections.subscribe((connection: MockConnection) => {
            const options = new ResponseOptions({
                body: JSON.stringify({ 'status': 'success', 'carObject': {_id : '123', brand: 'Ford'} }) });
            connection.mockRespond(new Response(options));
        });

        carDetailService.fetchCarDetail({carName: 'Edge'}).subscribe((response) => {
            expect(response.carObject.brand).toEqual('Ford');
            expect(response.carObject._id).toEqual('123');
        });

    }));
});
