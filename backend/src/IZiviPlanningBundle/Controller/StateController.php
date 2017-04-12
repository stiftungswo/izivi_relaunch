<?php
namespace IZiviPlanningBundle\Controller;

use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use FOS\RestBundle\Controller\Annotations;
use FOS\RestBundle\Request\ParamFetcherInterface;
use FOS\RestBundle\View\View;
use Symfony\Component\HttpFoundation\Response;

class StateController extends BaseController
{
    private $handlerSerivce = 'izivi.state.handler';

    /**
     * List all Entities.
     *
     * @ApiDoc(
     * resource = true,
     * description="Gets a Collection of States",
     * output = "IZiviPlanningBundle\Entity\State",
     * section="states",
     * statusCodes = {
     * 200 = "Returned when successful"
     * }
     * )
     *
     * @Annotations\View(
     * serializerEnableMaxDepthChecks=true,
     * serializerGroups={"List"}
     * )
     *
     * @Annotations\Route(requirements={"_format"="json"})
     *
     * @param ParamFetcherInterface $paramFetcher
     *            param fetcher codes
     *
     * @return array
     */
    public function getStatesAction(ParamFetcherInterface $paramFetcher)
    {
        return $this->view($this->container->get($this->handlerSerivce)->all($paramFetcher->all()), Response::HTTP_OK);
    }
}