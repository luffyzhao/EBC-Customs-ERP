<?php


namespace LAuth\Plugins\UEditor;


class Listfile implements Contracts\UEditor
{

    public function handle(): array
    {
        return [
            'state' => 'ERROR',
            'list' => [],
        ];
    }
}