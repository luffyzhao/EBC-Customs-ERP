<?php


namespace LAuth\Plugins\UEditor;


class Listimage implements Contracts\UEditor
{

    public function handle(): array
    {
        return [
            'state' => 'ERROR',
            'list' => [],
        ];
    }
}