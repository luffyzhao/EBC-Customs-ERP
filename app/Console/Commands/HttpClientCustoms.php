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
                'userToken' => 'eyJoZWFkZXIxIjoiaGVhZGVyMSB2YWx1ZTIiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJzaWduYXR1cmUiLCJjbGllbnRJZCI6IkJMUyIsImNsaWVudEtleSI6InRrMjM2NUU5OHU4NzQiLCJwYXNzd29yZCI6ImI0Mzk4MjA4MDVhODY5YzU2NTE2YjBhYzE5OWQ5OWQyN2QxMjhiZDUwMDMyNjI2MjcxOTdmZWQ2MzRlOGEwZGJhNzc0NDUyZmU0MmM1NTgwMDkyYTBkZTljNTBjNjk5ZGQwOGE3MmQ4YTVlMjM1OTRhODhlZDAxODVkYzRmZmYxOWZlZDQ0ZGY3MDhjMTE1MjFkM2I0NWRjNzA1NzE3NGZkZGJiMWFiM2FhZTZmNjJjMzU1ZjdhMDRlZGIyZGU3MDAzNWM3MWViNDJmNzBmOWY2NDhkZTcwNzNlMTdmYTUwMmUzZjI1YTY4YzdiZTRlYzA0NWY1MGIxNDJlNDdiNjkiLCJ1c2VyTmFtZSI6ImhoaGFuY2hvbmciLCJ0cyI6IjE1NzE2MjE0OTU5NTMifQ.sk510eixkq_BcUfkeNFkGwkLM0vfnOoBE-EpVsZyqTn9-wKKtGdUUMtOng4L-ggl4b43CCiYuGUuwc8AD0GvpdHinlw5R8gG_LNVYvBURBtH0NhdwyWulvED4OLuJP_9dS6ncXbmvTAdGhAOSjjvbTKvYj64NYI5rsM-3AYAzl2rli-c9T6YIZ-f37O3RIXqQpIaJTxlqHla4LTc9if6myG0DI_jUhcqW-EjAvhVXthatocCstu9OUpePod9vLq2ygKTEcrSDEmXLJFz_esCD8QhYQ3052XRvhW36CGFheU6GyLYuV-dG5IOq8VDtePLm0LXIViDmKoIHvx4_EbG3g'
            ]
        ]);

        $this->handleOnce($client);

    }



    protected function handleOnce(Client $client, $pageSize = 100, $pageNumber = 0){

        $body = $this->getBody($client, 'codCusCountry/list', [
            'pageSize' => $pageSize,
            'pageNumber' => $pageNumber,
            'appId' => 1,
            'sort' => 'countryCo',
            'sortOrder' => 'asc'
        ]);

        foreach ($body['data'] as $data){
            DB::table('customs_countries')->insert([
                'code' => $data['countryCo'],
                'name' => $data['countryNa'],
                'code_en' => $data['countryEn'],
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
