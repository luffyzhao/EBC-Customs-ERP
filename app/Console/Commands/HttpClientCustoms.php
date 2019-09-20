<?php

namespace App\Console\Commands;

use GuzzleHttp\Client;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class HttpClientCustoms extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'http:customs';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '或者海关信息';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function handle()
    {
        $client = new Client([
            'base_uri' => 'http://58.20.36.50:8860/cod_cus/',
            'timeout' => 5.0,
            'headers' => [
                'userToken' => 'eyJoZWFkZXIxIjoiaGVhZGVyMSB2YWx1ZTIiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJzaWduYXR1cmUiLCJjbGllbnRJZCI6IkJMUyIsImNsaWVudEtleSI6InRrMjM2NUU5OHU4NzQiLCJwYXNzd29yZCI6ImI0Mzk4MjA4MDVhODY5YzU2NTE2YjBhYzE5OWQ5OWQyN2QxMjhiZDUwMDMyNjI2MjcxOTdmZWQ2MzRlOGEwZGJhNzc0NDUyZmU0MmM1NTgwMDkyYTBkZTljNTBjNjk5ZGQwOGE3MmQ4YTVlMjM1OTRhODhlZDAxODVkYzRmZmYxOWZlZDQ0ZGY3MDhjMTE1MjFkM2I0NWRjNzA1NzE3NGZkZGJiMWFiM2FhZTZmNjJjMzU1ZjdhMDRlZGIyZGU3MDAzNWM3MWViNDJmNzBmOWY2NDhkZTcwNzNlMTdmYTUwMmUzZjI1YTY4YzdiZTRlYzA0NWY1MGIxNDJlNDdiNjkiLCJ1c2VyTmFtZSI6ImhoaGFuY2hvbmciLCJ0cyI6IjE1Njg5NjY3ODU1MDIifQ.Ua3Yo5hvm8EJH2lnlhuoPqKUbDIr2ulF2Q2wLs7WRt9FMMxXbXodxPwIXmTGq4QBvBSJSrsoB3DNlyk-e3-Jfs_9NnY5nRJoIoePFVxf5qNfVrhMdJC-pldNHEkhbKDf9WEcRugJ3gFAgSZ5ye-UqmTbno9NsfgLhLs_Dwu8Jy97iIDsco3aqwmVtAzCwo3Uvz_XVyhwi6zAl99QIRVqF9XQyoBj8Jh7_ZrIPq1SxUG-xoSqEyyFWS2yPx0F79ayqNCJAdLOTI1RiNwVB6JSy2W318Wh7MRCqIEs9IGb1aYc7Cy2TOW7s_ARO-40UZCLBQwNKR9wMwJKccBU9hyplA'
            ]
        ]);

        $this->once($client);

    }

    protected function once(Client $client){
        DB::table('customs_hs_codes')->chunkById(100, function ($arr) use ($client){
            foreach ($arr as $item){
                $body = $this->getBody($client, 'codMerchClassify/list/view', [
                    'codeTs' => $item->code,
                ]);
                $elements = [];
                foreach ($body['data'] as $data){
                    $elements[$data['sNum']] = $data['element'];
                }
                DB::table('customs_hs_codes')->where('code', '=', $item->code)->update([
                    'elements' => \GuzzleHttp\json_encode($elements)
                ]);
            }
        }, 'code');
    }

    protected function handleOnce(Client $client, $pageSize = 100, $pageNumber = 0){

        $body = $this->getBody($client, 'codCusComplex/list', [
            'pageSize' => $pageSize,
            'pageNumber' => $pageNumber,
            'appId' => 1,
            'sort' => 'codeTS',
            'sortOrder' => 'asc'
        ]);

        foreach ($body['data'] as $data){
            DB::table('customs_hs_codes')->insert([
                'code' => $data['codeTS'],
                'name' => $data['gName'],
                'describe' => $data['noteS'],
                'unit1' => $data['unit1'],
                'unit2' => $data['unit2'],
            ]);
        }

        $pageNumber += $pageSize;
        if($body['total'] > $pageNumber){
            $this->handleOnce($client, $pageSize, $pageNumber);
        }
    }

    /**
     * @param Client $client
     * @param $url
     * @param $query
     * @return mixed
     * @throws \GuzzleHttp\Exception\GuzzleException
     * @author luffyzhao@vip.126.com
     */
    protected function getBody(Client $client, $url, $query)
    {
        $query['_'] = time() . '000';
        $response = $client->request('GET', $url, [
            'query' => $query
        ]);

       return \GuzzleHttp\json_decode($response->getBody()->getContents(), true);
    }
}
